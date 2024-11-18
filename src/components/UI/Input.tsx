/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Input } from "@headlessui/react";
import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, Ref } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const InputComponent = forwardRef(
  ({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    return (
      <>
        <Input
          ref={ref}
          {...rest}
          className={clsx(
            "mt-3 block w-full rounded-lg border-none text-black dark:text-white bg-gray-200 dark:bg-black/50 py-1.5 px-3 text-sm/6 ",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        />
      </>
    );
  }
);
export default InputComponent;
