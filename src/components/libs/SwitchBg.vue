<script>
import { h } from "vue";
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    source: {},
    activeSource: {},
    activeEvent: {
      type: Array,
      default: () => ["click"],
    },
    tag: {
      default: () => "div",
    },
  },
  setup(props, context) {
    return () => {
      const activeEventObj = props.activeEvent.reduce(
        (collector, name) =>
          Object.assign(collector, {
            [`on${name[0].toUpperCase()}${name.slice(1)}`]: () =>
              context.emit("update:active", !props.active),
          }),
        {}
      );
      return h(props.tag, {
        class: ["switchBg", { "switchBg--active": props.active }],
        style: [
          {
            backgroundImage: `url(${props.source}), url(${props.activeSource})`,
          },
        ],
        // ...activeEventObj
      });
    };
  },
};
</script>

<style lang="scss">
.switchBg {
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-size: 100%, 0%;
  background-repeat: no-repeat;
  background-position: center;
  
  &--active {
    background-size: 0%, 100%;
  }
}
</style>
