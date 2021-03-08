<template>
  <div>
    <AreaChart/>
    <PieChart/>
    <BarChart/>
    <RadarChart/>
    <LineChart/>
  </div>
</template>

<script>
import AreaChart from "@/components/chart/ChartArea.vue";
import PieChart from "@/components/chart/ChartPie.vue";
import BarChart from "@/components/chart/ChartBar.vue";
import RadarChart from "@/components/chart/ChartRadar.vue";
import LineChart from "@/components/chart/ChartLine.vue"

export default {
  name: "App",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  }
};
</script>

<style>
/* #chart {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
