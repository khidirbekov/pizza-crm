<template>
  <div>
    <header-action @createAction="beforeCreate" @editAction="beforeEdit" @removeAction="remove" />
    <div class="form">
      <vs-input class="field" label="Название" v-model="form.name" />
      <vs-input
        class="field"
        type="textarea"
        label="Описание"
        v-model="form.description"
      />
      <vs-input class="field" type="number" label="Цена" v-model="form.price" />
      <div class="file-input">
        <span class="vs-input__label--label upload-label">Изображение</span>
        <label for="file">
          <div
            class="vs-button vs-button--null vs-button--size-null vs-button--icon vs-button--primary vs-button--flat vs-input-content upload-btn"
            ref="button"
          >
          <div class="vs-button__content">
            <i class="bx bx-upload"></i>
            Загрузить
          </div>
          </div>
        </label>
        <input
          id="file"
          type="file"
          style="display: none"
          @change="onFileChange"
        />
        <div v-if="form.image.id" class="image-field">
          <img :src="filesUrl + '/' + form.image.path" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAction from "@/components/HeaderAction";
import CRUDMixin from "@/mixins/crud";
import request from "@/utils/request";

const apiHost = process.env.VUE_APP_TARGET;

export default {
  mixins: [CRUDMixin],
  components: {
    HeaderAction,
  },
  data() {
    return {
      isFetched: false,
      id: null,
      form: {
        name: "",
        description: "",
        price: 0,
        image: "",
      },
      cities: [],
      citiesLoading: true,
      uploadUrl: `${apiHost}/api/files`,
      filesUrl: `${apiHost}/uploads`,
    };
  },
  methods: {
    async beforeCreate() {
      this.form.price = +this.form.price;
      this.form.image = `/api/files/${this.form.image.id}`;
      await this.create();
    },
    async beforeEdit() {
      this.form.price = +this.form.price;
      this.form.image = `/api/files/${this.form.image.id}`;
      await this.edit();
    },
    async onFileChange(event) {
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      const loading =  this.$vs.loading({
        target: this.$refs.button
      }) 
      const { data } = await request('/api/files', {
        method: "POST",
        data: formData
      })
      loading.close()
      this.form.image = data

      // console.log(file)
      // const { id } = response[0].data;
    }   
  },
};
</script>

<style scoped>
.file-input {
  width: 250px;
  margin-top: 10px;
}
.image-field {
  width: 300px;
}

.image-field img {
  width: 100%;
}

.upload-label {
  padding-left: 10px;
  margin-top: 20px;
}

.upload-btn {
  margin-left: 0;
  margin-top: 0;
}
</style>
