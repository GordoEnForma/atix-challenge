import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
    <input
        ref={ref}
        {...props}
        className="block w-full rounded-md border border-gray-400  bg-white py-2 px-3 text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600"

    />
))