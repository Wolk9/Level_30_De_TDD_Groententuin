# Groentetuin Schema

[![](https://mermaid.ink/img/eyJjb2RlIjoiZmxvd2NoYXJ0IExSXG5BW3N0YXJ0XSA9PSBjcm9wLCBlbnZGYWN0ID09PiBCW1wiZ2V0UHJvZml0Rm9yQ3JvcChjcm9wLCBlbnZGYWN0KVwiXVxuQiAtLSBjcm9wLCBlbnZGYWN0IC0tPiBDT1NUXG5CIC0tIGNyb3AsIGVudkZhY3QgLS0-IFJFVlxuQiA9PSBwcm9maXRDcm9wID09PiBFW2VuZF1cbkNPU1QgLS0gY29zdEZvckNyb3AgLS0-IEJcblJFViAtLSByZXZQZXJDcm9wIC0tPiBCXG5EIC0tIGNyb3AsIGVudkZhY3QgLS0-IEZbXCJnZXRZaWVsZGZvckNyb3AoY3JvcCwgZW52RmFjdClcIl1cbkYgLS0geWllbGRGb3JDcm9wIC0tPiBEXG5GIC0tIGNyb3AsIGVudkZhY3QgLS0-IEdbXCJnZXRZaWVsZm9yUGxhbnQoY3JvcCwgZW52RmFjdClcIl1cbkcgLS0geWllbGRGb1BsYW50IC0tPiBGXG5zdWJncmFwaCBSRVZcbmRpcmVjdGlvbiBUQlxuRFtcImdldFJldmVudWVGb3JDcm9wKGNyb3AsIGVudkZhY3QpXCJdXG5GW1wiZ2V0WWllbGRmb3JDcm9wKGNyb3AsIGVudkZhY3QpXCJdXG5HW1wiZ2V0WWllbGZvclBsYW50KGNyb3AsIGVudkZhY3QpXCJdXG5lbmRcbnN1YmdyYXBoIENPU1RcbmRpcmVjdGlvbiBMUlxuQ1tcImdldENvc3RGb3JDcm9wKGNyb3AsIGVudkZhY3QpXCJdXG5lbmQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NocmltYXNdIC0tPnxHZXQgbW9uZXl8IEIoR28gc2hvcHBpbmcpXG4gICAgQiAtLT4gQ3tMZXQgbWUgdGhpbmt9XG4gICAgQyAtLT58T25lfCBEW0xhcHRvcF1cbiAgICBDIC0tPnxUd298IEVbaVBob25lXVxuICAgIEMgLS0-fFRocmVlfCBGW2ZhOmZhLWNhciBDYXJdIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

::: mermaid
flowchart LR
A[start] == crop, envFact ==> B["getProfitForCrop(crop, envFact)"]
B -- crop, envFact --> COST
B -- crop, envFact --> REV
B == profitCrop ==> E[end]
COST -- costForCrop --> B
REV -- revPerCrop --> B
D -- crop, envFact --> F["getYieldforCrop(crop, envFact)"]
F -- yieldForCrop --> D
F -- crop, envFact --> G["getYielforPlant(crop, envFact)"]
G -- yieldFoPlant --> F
subgraph REV
direction TB
D["getRevenueForCrop(crop, envFact)"]
F["getYieldforCrop(crop, envFact)"]
G["getYielforPlant(crop, envFact)"]
end
subgraph COST
direction LR
C["getCostForCrop(crop, envFact)"]
end
:::

---
