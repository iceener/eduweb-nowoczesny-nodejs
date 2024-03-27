import { button, div, input, label, p } from '../render/create-element.ts';
import { newsletterResource } from '../resources/newsletter.resource.ts';

export function NewsletterForm() {

  const btn = button('button is-link', ['Sign up']);
  const errorBox =  p('help is-danger');
  const inputEl = input('input') as HTMLInputElement;

  btn.addEventListener('click', () => {
    newsletterResource.singUp(inputEl.value)
  })

  newsletterResource.emitter.on('loading', () => {
    errorBox.innerHTML = '';
  })
  newsletterResource.emitter.on('success', () => {
    inputEl.value = '';
    btn.setAttribute('disabled', 'true')
  })
  newsletterResource.emitter.on('error', (error) => {
    errorBox.innerHTML = error.response?.data.message || '';
  })

  return div('', [
    div('field', [
      label('label', ['Your email:']),
      inputEl,
      errorBox
    ]),
    div('field', [
      div('control is-flex is-justify-content-right', [
        btn
      ])
    ])
  ])
}
