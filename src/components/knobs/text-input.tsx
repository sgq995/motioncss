import { TbPencil } from 'solid-icons/tb';
import { createSignal, type Component, Show } from 'solid-js';
import { Input } from '../common/input';

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
    <div class="relative flex w-full justify-between">
      <Input
        ref={inputRef!}
        class="w-full"
        onChange={(event) => props.onTextChange(event.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <Show when={!isFocused()}>
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={handleButtonClick}
        >
          <TbPencil class="h-6 w-6" />
        </button>
      </Show>
    </div>
  );
};
