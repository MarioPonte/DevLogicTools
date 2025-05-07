"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from 'qrcode';
import { Download } from "lucide-react";
import { ColorPicker } from "@/components/ui/color-picker";

export default function Page() {
    const [url, setUrl] = useState("");
    const [qrcode, setQrcode] = useState("");
    const [mainColor, setMainColor] = useState('#000000');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const generateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 1280,
            margin: 2,
            color: {
                dark: mainColor,
                light: backgroundColor
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
                    <div className="min-h-80 py-6 border rounded flex items-center justify-center text-gray-400">
                        {!qrcode ? "QR Code aparecerá aqui" : (
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <img src={qrcode} alt="QRCode" className="w-48 h-48 border" />
                                <a href={qrcode} download="qrcode.png" className="flex gap-4 items-center py-2 px-4 rounded-lg border text-xs text-black">
                                    <Download size={16} />
                                    Baixar imagem do QR Code
                                </a>
                                <div className="flex flex-col gap-2 border px-4 py-2 rounded-md">
                                    <div className="flex gap-2 items-center">
                                        <ColorPicker id="mainColor" onChange={(v) => setMainColor(v)} value={mainColor} />
                                        <label htmlFor="mainColor" className="text-black text-sm">
                                            Cor Principal
                                        </label>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <ColorPicker id="backgroundColor" onChange={(v) => setBackgroundColor(v)} value={backgroundColor} />
                                        <label htmlFor="backgroundColor" className="text-black text-sm">
                                            Cor do Fundo
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}