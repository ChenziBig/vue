import { ref, onMounted, computed } from "vue";

export default function () {
  // 数据
  let sum = ref(0);
  // 方法
  function changeSum() {
    sum.value += 1;
  }

  let bigSum = computed(() => {
    return sum.value * 10 + 1;
  });

  // 挂载，让网页加载的时候先自动调用一下这个函数
  onMounted(() => {
    changeSum();
  });

  return { sum, changeSum, bigSum };
}
