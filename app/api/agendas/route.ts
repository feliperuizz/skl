import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat") || "federal";
  const id = searchParams.get("id");

  const url = id
    ? `https://sitecontabil.com.br/json/?db=sc_agendas&id=${id}`
    : `https://sitecontabil.com.br/json/?db=sc_agendas&limite=60&cat=${cat}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Falha ao buscar dados da agenda." }, { status: 500 });
  }
}
