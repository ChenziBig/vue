import { reactive, onMounted } from "vue";
import axios from "axios";

export default function () {
  // 数据
  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_187.jpg",
  ]);
  // 方法
  async function getDog() {
    try {
      let result = await axios.get("https://dog.ceo/api/breeds/image/random");
      dogList.push(result.data.message);
    } catch (error) {
      alert(error);
    }
  }

  // 挂载，让网页加载的时候先自动调用一下这个函数
  onMounted(() => {
    getDog();
  });

  // 向外部提供东西
  return { dogList, getDog };
}
