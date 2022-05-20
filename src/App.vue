<template>
    <VueLive :layout="layout" :code="`
        <h3>Add Mirotone HTML and CSS here!</h3>
        
    
            
    `" @error="(e) => handleError(e)" />
</template>

<script>
import { VueLive } from "vue-live";
import layout from "./Layout.vue";
import "prismjs/themes/prism-tomorrow.css";

// if you are using vue-cli, you have to import the css separately
import "vue-live/lib/vue-live.esm.css";
import 'mirotone/dist/styles.css';

export default {
    components: { VueLive },
    data(){
        return { layout }
    }
}
</script>
