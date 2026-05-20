import { readFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const rteDirectory = path.join(process.cwd(), "RTE");

export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> },
) {
  const { file } = await context.params;
  const decodedFile = decodeURIComponent(file);

  if (
    !decodedFile.toLowerCase().endsWith(".pdf") ||
    decodedFile.includes("/") ||
    decodedFile.includes("\\")
  ) {
    return new NextResponse("Documento no valido", { status: 400 });
  }

  try {
    const filePath = path.join(rteDirectory, decodedFile);
    const pdf = await readFile(filePath);

    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(decodedFile)}`,
        "Content-Type": "application/pdf",
      },
    });
  } catch {
    return new NextResponse("Documento no encontrado", { status: 404 });
  }
}
