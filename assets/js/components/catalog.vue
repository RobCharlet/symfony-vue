<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :categories="categories"
                    :current-category-id="currentCategoryId"
                />
            </div>
            <div class="col-9">
                <search-bar
                    @search-products="onSearchProducts"
                />
            </div>
        </div>
        <product-list
            :products="filteredProducts"
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
import SearchBar from '@/components/search-bar';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        SearchBar,
        TitleComponent,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            searchTerm: '',
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
    methods: {
        onSearchProducts(event) {
            this.searchTerm = event.term;
        },
    },
    computed: {
        filteredProducts() {
            if (!this.searchTerm) {
                return this.products;
            }

            return this.products.filter((product) => (
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            ));
        },
    },
};
</script>
