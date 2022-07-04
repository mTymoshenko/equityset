<template>
  <div class="overflow-x-auto">
    <table class="base-table" v-if="hasData">
      <thead class="base-table__headers">
        <slot name="columns">
          <tr class="base-table__row">
            <th
              v-for="(column, index) in columns"
              :key="index"
              :class="`base-table__headers-title title-h5 font-medium base-table__content--${column.align}`"
            >
              {{ column.title }}
            </th>
          </tr>
        </slot>
      </thead>
      <tbody>
        <template v-for="(item, index) in data">
          <tr class="base-table__row" :key="index">
            <slot :row="item" :index="index">
              <td v-for="(column, idx) in columns" :key="`${column} ${idx}`">
                {{ itemValue(item, column.title) }}
              </td>
            </slot>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="flex-center" v-else>Table data is empty</div>
  </div>
</template>

<script>
export default {
  name: "base-table",

  props: {
    columns: Array,
    data: Array,
  },

  computed: {
    hasData() {
      return !!this.data.length;
    },
  },

  methods: {
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>
