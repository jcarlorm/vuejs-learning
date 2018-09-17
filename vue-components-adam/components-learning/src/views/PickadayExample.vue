<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <h3>Pick a day js</h3>

                        <div class="form-group">
                            <label >Seleccione una fecha</label>
                            <datepicker v-model="date" :options="{ firstDay: 2 }"></datepicker>
                        </div>

                        <markdown :mark="mark"></markdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Datepicker from '../components/Datepicker.vue'

export default {

    name: 'pickaday',

    components:{
        Datepicker
    },
    data() {
        return {
            date: '06-09-2018',
            mark: `
Datepicker
----------
- **1.** Libreria pikaday js npm install pikaday
- **2.** Exportar css de la libreria
- **3.** Se creo el componente datepicker
- **4.** Se pueden cambiar las opciones

            `
        }
    },
  
}
</script>

