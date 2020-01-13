<template>
  <v-row justify="center">
    <v-dialog v-model="dialogMessage" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-if="fixed"  fab small fixed absolute top right color="perfect" class="shadow-none mr-4" v-on="on" style="margin-top: 3rem; z-index: 0;"></v-btn>

        <v-btn v-else  icon size="20" v-on="on">
          <v-icon color="white">mdi-whatsapp</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-icon color="green">mdi-whatsapp</v-icon>

          <titleMsgIcon width="160" height="48" />

          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="dialogMessage = !dialogMessage" class="ba-1">
            <closeIcon width="20" height="20" color="#fc4850" class="mt-1" />
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="6" class="my-0 py-0">
                  <span>Primeiro nome</span>
                  <v-text-field label="Adicione seu nome*" solo v-model="firstName" required hint="Requerido"
                    style="border-radius: 15px;" :rules="firstNameRules"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6" class="my-0 py-0">
                  <span>Sobrenome</span>
                  <v-text-field label="Adicione seu sobrenome" solo v-model="lastName" hint="Opcional"
                    style="border-radius: 15px;" :rules="lastNameRules"></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" class="my-0 py-0">
                  <span>Edite sua mensagem</span>
                  <v-textarea solo v-model="msg" :msgEdit="msgEdit" label="Adicione sua mensagem"
                    style="border-radius: 15px;" :rules="msgRules"></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small>*campos requeridos</small>
        </v-card-text>
        <v-card-actions style="background-color: green">
          <v-spacer></v-spacer>
          <v-btn rounded target="_blank" color="green" :href="url" @click="sendMessage" :disabled="!valid"
            class="pl-5 pr-5">
            Enviar
            <v-progress-circular v-if="!valid" indeterminate size="25" width="4" color="white" class="ml-3">
            </v-progress-circular>
          </v-btn>
          <v-btn v-if="msg.length <= 12" rounded color="green" @click="restartMsg">
            <restartIcon width="30" height="30" class="mt-1" />
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-snackbar v-if="!valid" :value="snackbarInfo" color="perfect" bottom right>
          {{snackbarInfoText}}
          <opsIcon width="40" height="40" class="mt-1 ml-3" />
        </v-snackbar>

        <v-snackbar :value="snackbarSend" color="#0AE6B2" bottom right>
          Enviando...
          <v-progress-circular indeterminate size="25" width="4" color="white" class="ml-3">
          </v-progress-circular>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import closeIcon from '../icons/closeIcon'
  import titleMsgIcon from '../icons/titleMsgIcon'
  import restartIcon from '../icons/restartIcon'
  import opsIcon from '../icons/opsIcon'
  export default {
    name: 'dialogSendMessage',
    props: {
      fixed: {
        type: Boolean,
        required: true
      }
    },
    components: {
      closeIcon,
      titleMsgIcon,
      restartIcon,
      opsIcon
    },
    data() {
      return {
        dialogMessage: false,
        snackbarInfo: true,
        snackbarSend: false,
        snackbarInfoText: 'Verifique sua mensagem para prosseguir!',
        firstName: 'Usário',
        lastName: '',
        msg: '',
        newMsg: '',
        valid: true,
        restart: false,
        firstNameRules: [v => !!v || "Ops, adicione...", v => (v && v.length <= 10) || "Ops, no máximo 10 caracteres..."],
        lastNameRules: [v => (v && v.length === 0 || v.length <= 10) || "Ops, no máximo 10 caracteres..."],
        msgRules: [v => !!v || "Ops, adicione sua mensagem...", v => (v && v.length <= 150) || "Ops, no máximo 150 caracteres..."]
      }
    },
    mounted() {
      if (localStorage.getItem("username")) {
        try {
          let username = JSON.parse(localStorage.getItem("username"));
          this.firstName = username[0]
          if (username.length === 2) { this.lastName = username[1] }
        } catch (e) {
          localStorage.removeItem("username");
        }
      }
    },
    watch: {
      lastName() {
        if (this.firstName.toLowerCase() == this.lastName.toLowerCase()) {
          this.valid = false
          this.snackbarInfoText = 'Ops, Primeiro nome e Sobrenome se  repetem...'
        } else {
          this.valid = true
          this.snackbarInfoText = 'Verifique sua mensagem para prosseguir!'
        }
      }
    },
    computed: {
      msgEdit() {
        return this.msg = `${'Olá! Me chamo ' + this.firstName + ' ' + this.lastName}`
      },
      url() {
        return `${'https://api.whatsapp.com/send?phone=558694788750&text=' + this.newMsg + + '\n' + '\n' + 'Enviado pelo Site: Wifind'}`
      }
    },
    methods: {
      sendMessage() {
        if (this.$refs.form.validate()) {
          this.newMsg = this.msg.replace(' ', '%20')
          this.msg = this.msgEdit
          this.localStorageUsername()
          this.snackbarSend = !this.snackbarSend

          setTimeout(() => {
            this.snackbarSend = false
          }, 5000);
        }
      },

      localStorageUsername() {
        let username = []
        username.push(this.firstName)
        if (this.lastName) { username.push(this.lastName) }
        localStorage.setItem('username', JSON.stringify(username))
      },

      restartMsg() {
        return this.msg = `${'Olá! Me chamo ' + this.firstName + ' ' + this.lastName}`
      }
    }
  }
</script>