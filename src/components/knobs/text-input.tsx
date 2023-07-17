import { TbPencil } from 'solid-icons/tb';
import { createSignal, type Component, Show } from 'solid-js';

export type TextInputProps = {
  onTextChange: (value: string) => void;
};

export const TextInput: Component<TextInputProps> = (props) => {
  let inputRef: HTMLInputElement;

  let [isFocused, setIsFocused] = createSignal(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleButtonClick = () => {
    inputRef.focus();
  };

  return (
    <div class="flex w-full justify-between border-b border-b-gray-500">
      <input
        ref={inputRef!}
        class="w-full focus:outline-none"
        onChange={(event) => props.onTextChange(event.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <Show when={!isFocused()}>
        <button onClick={handleButtonClick}>
          <TbPencil />
        </button>
      </Show>
    </div>
  );
};
