<script>
const defaultMethods = ['clearSelection', 'toggleRowSelection', 'toggleAllSelection', 'toggleRowExpansion', 'setCurrentRow', 'clearSort', 'clearFilter', 'doLayout', 'sort']

function getTableMethods() {
  const methodsObj = Object.create(null)
  defaultMethods.forEach(method => {
    methodsObj[method] = function() { }
  })
  return methodsObj
}
export default {
  name: 'ProTable',
  props: {
    column: {
      type: Array,
      required: true,
      defult() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      ...getTableMethods()
    }
  },
  mounted() {
    this.initTable()
  },
  methods: {
    // 代理子组件ref方法
    initTable() {
      defaultMethods.forEach(method => {
        this.$set(this, method, this.$refs.elTable[method])
      })
    },
    getDefaultColumn({ prepend = '', append = '', prop, ...props }) {
      const soltInfo = {}
      if (prepend || append) {
        soltInfo['scopedSlots'] = {
          default: ({ row }) => {
            return `${prepend}${row[prop] || ''}${append}`
          }
        }
      }
      return (
        <ElTableColumn
          prop={prop}
          props={props}
          {
            ...soltInfo
          }
        />
      )
    },
    getSoltColumn(props) {
      return (
        <ElTableColumn
          props={props}
          scopedSlots={{
            default: (columnProps) => {
              return this.$scopedSlots[props.prop]?.(columnProps) || columnProps.row[props.prop]
            },
            header: (columnProps) => {
              return this.$scopedSlots[props.headerSolt]?.(columnProps) || props.label
            }
          }}
        />
      )
    },
    getBtnColumn({ btnList, ...props }) {
      return (
        <ElTableColumn
          props={props}
          scopedSlots={{
            default: (columnProps) => {
              return btnList.map(({ text = '', onClick, className, ...btnProps }) => {
                return (
                  <ElButton
                    props={btnProps}
                    onClick={() => {
                      onClick && onClick(columnProps)
                    }}
                    class={className}
                  >
                    {{ text }}
                  </ElButton>
                )
              })
            },
            header: (columnProps) => {
              return this.$scopedSlots[props.headerSolt]?.(columnProps) || props.label
            }
          }}
        />
      )
    },
    getRenderCell({ renderCell, ...props }, createElement) {
      return (
        <ElTableColumn
          props={props}
          scopedSlots={{
            default: (columnProps) => {
              return renderCell(createElement, columnProps)
            }
          }}
        />
      )
    }
  },
  render(createElement) {
    const { getDefaultColumn, getSoltColumn, getBtnColumn, getRenderCell, data, column, border, stripe } = this
    return (
      <ElTable ref='elTable' data={data} props={{ border, stripe, ...this.$attrs }} on={this.$listeners}>
        {
          column.map((item) => {
            if (this.$scopedSlots[item.prop] || this.$scopedSlots[item.headerSolt]) {
              return getSoltColumn(item)
            } else if (item.btnList?.length) {
              return getBtnColumn(item)
            } else if (item.renderCell) {
              return getRenderCell(item, createElement)
            } else {
              return getDefaultColumn(item)
            }
          })
        }
      </ElTable>
    )
  }
}
</script>
