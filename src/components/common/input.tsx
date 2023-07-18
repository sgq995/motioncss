import { splitProps, type Component, type JSX } from 'solid-js';

export type InputProps = JSX.InputHTMLAttributes<HTMLInputElement>;

export const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <input
      {...others}
      class="rounded border border-gray-400 bg-gray-300 p-2 focus:bg-gray-50"
      classList={{
        [local.class ?? '']: true,
        ...local.classList,
      }}
    />
  );
};
