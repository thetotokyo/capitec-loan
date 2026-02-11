"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FormData } from "../types";

export default function BankApplicationForm() {
    const [formData, setFormData] = useState<FormData>({
        income: 0,
        expenses: 0,
        desired: 0
    });

    const [errorMsg, setErrorMsg] = useState<String>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(form => ({
            ...form,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: ChangeEvent) => {
        e.preventDefault();

        if (formData.income > 0 && formData.expenses > 0 && formData.desired > 0) {

            console.log("FormData:", formData);

        }
        else {
            setErrorMsg("Please complete all fields.");
        }
    };


    return (
        <div className="w-full max-w-3xl">
            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
                <Image src="/logo.svg" alt="Bank Logo" width={150} height={60} />
            </div>

            {/* Application form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Loan Amount Calculator
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Income
                    </label>
                    <div className="relative text-gray-500">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                            R
                        </span>
                        <input
                            type="number"
                            name="income"
                            required
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="0"
                        />
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Expenses
                    </label>
                    <div className="relative text-gray-500">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                            R
                        </span>
                        <input
                            type="number"
                            name="expenses"
                            required
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Desired Loan Amount
                    </label>
                    <div className="relative text-gray-500">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                            R
                        </span>
                        <input
                            type="number"
                            name="desired"
                            required
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="0"
                        />
                    </div>
                </div>

                <p className="text-red-800 text-center">{errorMsg}</p>

                <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
                >
                    Calculate
                </button>
            </form>
        </div>
    );
}

