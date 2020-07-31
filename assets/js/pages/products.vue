<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <Sidebar />
            </aside>
            <div class="col-xs-12 col-9">
                <Catalog />
            </div>
        </div>
    </div>
</template>

<script>
import Catalog from '../components/catalog';
import Sidebar from '../components/sidebar';

export default {
    name: 'Products',
    components: {
        Catalog,
        Sidebar,
    },
};
</script>
