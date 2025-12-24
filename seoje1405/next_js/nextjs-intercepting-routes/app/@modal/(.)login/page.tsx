'use client';

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


export default function LoginModal() {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        <dialog ref={dialogRef} className="border p-2 rounded"
        onClick={()=> router.back()}>

        <button
        onClick={() => dialogRef.current?.close()}
        >
            X
        </button>
        <h1>Modal Login Page</h1>
        </dialog>
    );
}