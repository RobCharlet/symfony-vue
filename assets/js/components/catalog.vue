<template>
    <div>
        <div class="row">
            <div class="col-12">
                <title-component />
            </div>
        </div>
        <product-list
            :products="products"
            :loading="loading"
        />
        <div class="row">
            <legend-component :title="legend + ' this is really javascript'" />
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import { fetchProducts } from '@/services/products-service';
import TitleComponent from '@/components/title';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            products: [],
            legend: "Shipping takes 10-12 weeks, and products probably won't work",
            loading: false,
        };
    },
    async created() {
        this.loading = true;

        let response;
        try {
            response = await fetchProducts(this.currentCategoryId);
            this.loading = false;
        } catch (e) {
            this.loading = false;

            return;
        }
        this.products = response.data['hydra:member'];
    },
};
</script>
