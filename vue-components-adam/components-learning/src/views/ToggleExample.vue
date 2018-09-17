<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Ejemplo Toggle</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo</small>
                        </div>

                        <div class="form-group">
                            <toggle-input v-model="notificacion">Deseo recibir notificaciones por correo</toggle-input>
                        </div>

                        <markdown :mark="markdown"></markdown>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import ToggleInput from '../components/ToggleInput'

export default {
    name: 'toggleExample',

    components:{
        ToggleInput
    },
    data() {
        return {
            email: '',
            notificacion: false,
            markdown: `
Componente Toggle
-----------------
- **1.** Este componente se creo con una clase 
    switch
- **2.** Se creo el elemento toggleInput
- **3.** Revisar VueTools
`
        }
    },
}   
</script>

