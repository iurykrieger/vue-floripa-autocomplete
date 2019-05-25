import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'
import { text, withKnobs } from '@storybook/addon-knobs'
import VueFloripaSuggestions from './Suggestions.vue'
import notes from './Suggestions.md'

storiesOf('Suggestions', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Default', () => ({
    components: { VueFloripaSuggestions },
    props: {
      query: {
        type: String,
        default: text('query', 'batman')
      }
    },
    template: `
      <vue-floripa-suggestions
        :query="query"
      />
    `
  }), {
    notes
  })
  .add('With custom movie', () => ({
    components: { VueFloripaSuggestions },
    props: {
      query: {
        type: String,
        default: text('query', 'batman')
      }
    },
    template: `
      <vue-floripa-suggestions
        :query="query"
      >
        <div slot="movie" slot-scope="{ movie }">
          <h3>{{ movie.title }}</h3>
          <img :src="movie.poster" />
        </div>
      </vue-floripa-suggestions>
    `
  }), {
    notes
  })
