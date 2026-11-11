import IconApple from '@icon/macro-apple.svg';
import { Show } from 'solid-js';
import { AuthButton } from './form-fields';

export function LoginPicker(props: {
  /** Sign in with Apple is required for App Store review and iOS-only. */
  showApple: boolean;
  onApple: () => void;
  onEmail: () => void;
}) {
  return (
    <div class="flex flex-col gap-3">
      <Show when={props.showApple}>
        <AuthButton variant="secondary" onClick={props.onApple}>
          <IconApple class="size-5 shrink-0" aria-hidden="true" />
          Continue with Apple
        </AuthButton>
      </Show>
      <AuthButton autofocus onClick={props.onEmail}>
        Continue with email
      </AuthButton>
    </div>
  );
}
