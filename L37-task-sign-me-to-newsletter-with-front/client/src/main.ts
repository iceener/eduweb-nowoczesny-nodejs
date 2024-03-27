import 'bulma/css/bulma.css'
import { div, p } from './render/create-element';
import { NewsletterForm } from './components/NewsletterForm.ts';
import { NotifySuccess } from './components/NotifySucess.ts';

const template = div('is-flex is-justify-content-center mt-6', [
  div('column is-two-fifths', [
    p('title is-1', ['Newsletter']),
    NewsletterForm(),
    NotifySuccess(),
  ])
])

document.querySelector<HTMLDivElement>('#app')!.append(template)
