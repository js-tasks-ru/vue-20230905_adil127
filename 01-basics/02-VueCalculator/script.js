import {createApp, defineComponent} from "./vendor/vue.esm-browser.js";

const App = defineComponent({
  name: 'App',
  // enum
  OperationType: Object.freeze({
    SUM: "sum",
    SUBSTRACT: "subtract",
    MULTIPLY: "multiply",
    DIVIDE: "divide"
  }),
  data() {
    return{
      leftOperand: 0,
      rightOperand: 0,
      operationPicked: this.$options.OperationType.SUM,
    }
  },
  computed: {
    calculatedValue() {
      const OperationType = this.$options.OperationType;
      switch (this.operationPicked) {
        case OperationType.SUM: {
          return this.leftOperand + this.rightOperand;
        }
        case OperationType.SUBSTRACT: {
          return this.leftOperand - this.rightOperand;
        }
        case OperationType.MULTIPLY: {
          return this.leftOperand * this.rightOperand;
        }
        case OperationType.DIVIDE: {
          return this.leftOperand / this.rightOperand;
        }
        default: {
          alert("case default");
        }
      }
    }
  },
});

createApp(App).mount('#app');
