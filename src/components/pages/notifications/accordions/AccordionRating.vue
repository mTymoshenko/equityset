<template>
  <BaseCard>
    <Accordion :is-open="true">
      <template #title> Stock Rating Changes (2) </template>
      <template #body>
        <BaseTable class="m-top-40" :data="tableData" :columns="tableColumns">
          <template slot-scope="{ row }">
            <td
              class="base-table__col base-table__content--left title-h6 flex flex-column"
            >
              <span class="title-h5 text-upper font-bold">
                {{ row.title }}
              </span>
              <span class="text-gray--lighter">
                {{ row.text }}
              </span>
            </td>
            <td class="base-table__col base-table__content--left title-h6">
              <span class="text-gray--light"> {{ row.rating.title }}: </span>
              <span class="text-upper font-bold">
                {{ row.rating.text }}
              </span>
            </td>
            <td class="base-table__col base-table__content--center">
              <BaseCheckbox
                class="flex-center"
                :value.sync="row.sms"
                :checked="row.sms"
              />
            </td>
            <td class="base-table__col base-table__content--center">
              <BaseCheckbox
                class="flex-center"
                :value.sync="row.email"
                :checked="row.email"
              />
            </td>
            <td class="base-table__col base-table__content--center">
              <BaseCheckbox
                class="flex-center"
                :value.sync="row.in_summary"
                :checked="row.in_summary"
              />
            </td>
            <td class="base-table__col base-table__content--center">
              <div class="base-table__actions flex-center">
                <button class="action action--edit">
                  <BaseIcon name="edit" />
                </button>
              </div>
            </td>
          </template>
        </BaseTable>
      </template>
    </Accordion>
  </BaseCard>
</template>

<script>
import Accordion from "@/components/common/Accordion.vue";

export default {
  name: "stock-rating",

  data() {
    return {
      tableData: [
        {
          text: "Apple Computers Inc.",
          title: "APPL",
          rating: {
            title: "Rating Change",
            text: "ANY",
          },
          sms: false,
          email: true,
          in_summary: true,
        },
        {
          text: "Walt Disney Co",
          title: "DIS",
          rating: {
            title: "Rating Change",
            text: "BUY",
          },
          sms: false,
          email: true,
          in_summary: true,
        },
        {
          text: "Securites that hit their Fair Value",
          title: "DELL",
          rating: {
            title: "Rating Change",
            text: "SELL",
          },
          sms: false,
          email: true,
          in_summary: true,
        },
      ],
      tableColumns: [
        {
          title: "",
          align: "left",
        },
        {
          title: "When",
          align: "left",
        },
        {
          title: "SMS",
          align: "center",
        },
        {
          title: "Email",
          align: "center",
        },
        {
          title: "In Summary",
          align: "center",
        },
        {
          title: "",
          align: "center",
        },
      ],
    };
  },

  components: {
    Accordion,
  },
};
</script>
