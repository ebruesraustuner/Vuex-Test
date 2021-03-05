<template>
    <div>
        <ul class="filter">
            <li><a @click="filtered('')">All</a></li>
            <li><a @click="filtered('Feudal')">Feudal</a></li>
            <li><a @click="filtered('Feudal')">Ali</a></li>
            <li><a @click="filtered('Feudal')">veli</a></li>
            <li><a @click="filtered('49-50')">49 - 50</a></li>
        </ul>
        <div class="ages">
            {{logs()}}
        </div>
        <div class="tables">
            <div class="tables__left">
                <table>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Costs- wood</th>
                        <th> costs - gold</th>
                    </tr>
                    <tr :key="index" v-for="(item, index) in getUnits" @click="addUnitSelection(item)">
                        <td v-if="!isSelectedUnit(item)" style="cursor:pointer" >
                            {{item.id}}</td>
                        <td v-else style="cursor:pointer;" @click="removeUnitSelection(item)"> {{item.id}}
                            <small>[x]</small></td>
                        <td> {{item.name}}</td>
                        <td> {{item.age}}</td>
                        <td v-for="cost in item.cost" :key="cost"> {{cost}}</td>
                    </tr>

                </table>
                <!-- <table>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Costs</th>
                    </tr>
                    <tr v-for="unit in units" :key="unit.id">
                        <td> {{unit.id}}</td>
                        <td>{{unit.name}}</td>
                        <td>{{unit.age}}</td>
                        <td v-for="cost in unit.cost" :key="cost"> {{cost}}</td>
                    </tr>
                </table> -->
            </div>
            <div class="tables__right">
                <agelist />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    ul.filter {
        li {
            a {
                cursor: pointer;
            }
        }
    }
    .filters {
        display: flex;

        &__unit {
            padding-right: 8px;
        }
    }

    .tables {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;

        &__.left {
            flex: 2;
        }

        &__.right {
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
    import agelist from './Agelist'

    export default {
        components: {
            agelist
        },

        data() {
            return {
                getUnits: {
                    ...this.$store.state.units
                }
            }
        },
        computed: {
            units() {
                return this.$store.state.units;
            },
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
            },
            filtered(filter) {
                return this.getUnits = {...this.$store.getters.filterUnitsData(filter)};
                //const unit = {...this.$store.getters.filterUnitsData(filter)};
                //this.$store.commit("filterUpdateUnit", [unit]);
            },
            logs() {
                console.log(this.$store.state.units);
            }
        },
        mounted() {
            this.$store.dispatch("getUnits");


        }


    }
</script>