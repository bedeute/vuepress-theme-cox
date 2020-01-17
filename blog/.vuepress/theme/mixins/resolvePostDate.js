import dayjs from "dayjs"

export default {
  methods: {
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    }
  }
}