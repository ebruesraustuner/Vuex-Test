<template>
    <div>
         <div class="filters__unit">
            <div> </div>
            <div>
            </div>
        </div>
        <table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                </tr>
                <tr v-for="unit in units" :key="unit.id" >
                    <td> {{unit.id}}</td>
                    <td>{{unit.name}}</td>
                    <td>{{unit.age}}</td>
                    <td v-for="cost in unit.cost" :key="cost"> {{cost}}</td>
                </tr>
            </table>
    </div>
</template>
<style lang="scss" scoped>
    .filters {
        display: flex;

        &__unit {
            padding-right: 8px;
        }
    }
    .tables{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
        &__.left{
            flex: 2;
        }
        &__.right{
            flex: 1;
        }

    }
    table,
    td,
    th {
        border: 1px solid black;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        tr {
            text-align: left;

            &:hover {
                background-color: yellow;
            }
        }
    }
</style>

<script>
    export default {
        name: 'agelist',
        data() {
            return {

            }
        },

        computed: {
            units() {
                return this.$store.state.units;
            }
        },
        methods: {
            addUnitSelection(unit) {
                this.$store.commit("addUnitSelection", unit);
            },
            removeUnitSelection(unit) {
                this.$store.commit("removeUnitSelection", unit);
            },
            isSelectedUnit(unit) {
                return this.$store.getters.isSelectedUnit(unit);
            }

        },
        mounted() {
           this.$store.dispatch("getUnits");
        }


    }
</script>