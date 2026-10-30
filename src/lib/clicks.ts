import { getDb, isMongoConfigured } from "./mongodb";

type ClickDoc = { _id: string; count: number };

async function clicksCollection() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

/** 링크 id별 클릭 수. DB를 쓸 수 없으면 null을 반환한다. */
export async function getClickCounts(): Promise<Record<string, number> | null> {
  if (!isMongoConfigured()) return null;
  try {
    const docs = await (await clicksCollection()).find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return null;
  }
}

/** 클릭 집계 실패가 링크 이동을 막지 않도록 에러는 삼킨다. */
export async function recordClick(id: string): Promise<void> {
  if (!isMongoConfigured()) return;
  try {
    await (await clicksCollection()).updateOne(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true },
    );
  } catch (error) {
    console.error("클릭 기록 실패:", error);
  }
}
