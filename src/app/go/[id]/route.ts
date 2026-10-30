import { after, NextResponse } from "next/server";
import { findLink } from "@/data/profile";
import { recordClick } from "@/lib/clicks";

export async function GET(_request: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const link = findLink(id);
  if (!link) {
    return new NextResponse("Not Found", { status: 404 });
  }

  after(() => recordClick(link.id));
  return NextResponse.redirect(link.url);
}
