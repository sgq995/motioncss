import { TbPencil } from 'solid-icons/tb';
import { createSignal, type Component, Show } from 'solid-js';

export const TextInput: Component = () => {
  let inputRef: HTMLInputElement;

  let [isFocused, setIsFocused] = createSignal(false);

  const handleInputFocus = () => {
    console.log('focus');
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleButtonClick = () => {
    inputRef.focus();
  };

  return (
    <div
      class="flex w-full justify-between border-b border-b-gray-500"
      classList={{
        'border-b-green-400': isFocused(),
      }}
    >
      <input
        ref={inputRef!}
        class="w-full focus:outline-none"
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
