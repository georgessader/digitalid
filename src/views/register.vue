<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="firstName" :rules="rules" label="First Name"></v-text-field>
      <v-text-field v-model="lastName" :rules="rules" label="Middle Name"></v-text-field>
      <v-text-field v-model="lastName" :rules="rules" label="Last Name"></v-text-field>
      <v-text-field v-model="lastName" :rules="rules" label="Email Address"></v-text-field>
      <v-text-field v-model="lastName" :rules="rules" label="Phone Number"></v-text-field>

      <v-file-input label="Id Image"></v-file-input>

      <v-text-field v-model="lastName" :rules="rules" label="Id Number"></v-text-field>

      <!------------------ Camera ------------------>
      <v-btn style="width: 100%;">
        <div id="app" class="web-camera-container">
          <div class="camera-button">
            <button type="button" class="button is-rounded"
              :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }" @click="toggleCamera">
              <span v-if="!isCameraOpen">Open Camera</span>
              <span v-else>Close Camera</span>
            </button>
          </div>

          <div v-show="isCameraOpen && isLoading" class="camera-loading">
            <ul class="loader-circle">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash': isShotPhoto }">

            <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

            <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

            <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
          </div>

          <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
            <button type="button" class="button" @click="takePhoto">
              <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
            </button>
          </div>

          <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
            <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
              Download
            </a>
          </div>
        </div>
      </v-btn>
      <!------------------ Camera ------------------>


      <v-text-field v-model="lastName" :rules="rules" label="UserName"></v-text-field>
      <v-text-field v-model="lastName" type="password" :rules="rules" label="Password"></v-text-field>
      <v-text-field v-model="lastName" type="password" :rules="rules" label="Confirm Password"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>


<script>

export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#'
    }
  },

  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch(error => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },

    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
};
</script>