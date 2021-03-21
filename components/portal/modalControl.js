import Vue from "vue";

const ModalControl = Vue.extend({
  data() {
    return {
      modalList: [],
    };
  },
  methods: {
    addModal(modal) {
      const index = this.modalList.findIndex((item) => item.id === modal.id);
      if (index === -1) {
        console.log("add", modal);
        this.modalList.push(modal);
      }
    },
    removeModal(modalId) {
      console.log("remove", modalId);
      const index = this.modalList.findIndex((modal) => modal.id === modalId);
      if (index !== -1) {
        return this.modalList.splice(index, 1);
      }
    },
    switchWindowScroll(open) {
      document.body.style.overflowY = open ? "auto" : "hidden";
    },
  },
  // created() {
  //   console.log("created", this._uid)
  // },
  watch: {
    modalList(now) {
      // console.log(now, now.length, "watch modalList")
      if (!now.length) {
        this.switchWindowScroll(true);
      } else {
        this.switchWindowScroll(false);
      }
    },
  },
});

const modalControl = new ModalControl();

export default modalControl;
