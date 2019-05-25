import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'
import { text, withKnobs } from '@storybook/addon-knobs'
import VueFloripaButton from './Button.vue'
import notes from './Button.md'

storiesOf('Vue Floripa|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Default', () => ({
    components: { VueFloripaButton },
    props: {
      text: {
        type: String,
        default: text('text', 'Vue Floripa!')
      }
    },
    template: `
      <vue-floripa-button>
        {{ text }}
      </vue-floripa-button>
    `
  }), {
    notes
  })
  .add('With emoji', () => ({
    components: { VueFloripaButton },
    props: {
      emojis: {
        type: String,
        default: text('emojis', '😀 😎 👍 💯')
      }
    },
    template: `
      <vue-floripa-button>
        {{ emojis }}
      </vue-floripa-button>
    `
  }), {
    notes
  })
