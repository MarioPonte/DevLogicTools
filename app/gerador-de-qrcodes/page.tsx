"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from 'qrcode';
import { Download } from "lucide-react";

export default function Page() {
    const [url, setUrl] = useState("");
    const [qrcode, setQrcode] = useState("");

    const generateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 1280,
            margin: 2,
            color: {
                dark: "#0000ff",
                light: "#71eeff"
            }
        }, (err, url) => {
            if (err) return console.error(err)

            setQrcode(url);
        })
    };

    return (
        <div className="mx-auto my-8 max-w-3xl px-4 sm:px-6">
            <div className="max-w-[860px] flex flex-col gap-4">
                <div className="text-center text-xl md:text-3xl">
                    <h1>
                        Gerador de QR Codes
                    </h1>
                </div>
                <div className="p-6 rounded-lg border space-y-4">

                    <Input
                        placeholder="Digite o link"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <Button onClick={generateQRCode} className="w-full">
                        Gerar QR Code
                    </Button>

                    {/* Aqui será renderizado o QR code futuramente */}
                    <div className="h-80 border rounded flex items-center justify-center text-gray-400">
                        {!qrcode ? "QR Code aparecerá aqui" : (
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={qrcode} alt="QRCode" className="w-48 h-48 border" />
                                <a href={qrcode} download="qrcode.png" className="flex gap-4 items-center py-2 px-4 rounded-lg border text-xs text-black">
                                    <Download size={16} />
                                    Baixar imagem do QR Code
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}