import { div } from '../render/create-element.ts';
import { newsletterResource } from '../resources/newsletter.resource.ts';

export function NotifySuccess() {
  const notify = div('notification is-success', ['Thank you for sign up to our newsletter.'])
  notify.style.visibility = 'hidden';

  newsletterResource.emitter.on('loading', () => {
    notify.style.visibility = 'hidden';
  })
  newsletterResource.emitter.on('success', () => {
    notify.style.visibility = 'visible';
  })

  return notify;
}
