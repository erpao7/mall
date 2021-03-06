import { debounce } from "../common/utils";
export const itemListenerMixin={
    data() {
        return {
            itemImageListener:null,
            refresh:null
        }
    },
    mounted() {
        this.refresh=debounce(this.$refs.scroll.refresh,200)
        this.itemImageListener=()=>{
         this.refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImageListener)
    //   console.log(5555);
    },
}

