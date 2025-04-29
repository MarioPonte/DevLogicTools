"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from 'qrcode';

export default function Page() {
    const [url, setUrl] = useState("");
    const [qrcode, setQrcode] = useState("");

    const generateQRCode = () => {
        QRCode.toDataURL(url, (err, url) => {
            if (err) return console.error(err)

            console.log(url);
            setQrcode(url);
        })
    };

    const handleGenerate = () => {
        // in future we will generate the QR code here
        console.log("Texto para QR:", url);
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
                    <div className="h-40 border rounded flex items-center justify-center text-gray-400">
                        {!qrcode ? "QR Code aparecerá aqui" : <img src={qrcode} alt="QRCode" />}
                    </div>
                </div>
            </div>
        </div>
    );
}