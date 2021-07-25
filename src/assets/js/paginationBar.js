export function paginationBarJs(res, goodsListData, goodsListPaginationData) {
  if (res != null) goodsListData = res;
  goodsListPaginationData = {};
  let paginations = goodsListData.length / 20;
  if (paginations < 1) paginations = 1;
  paginations = parseInt(paginations.toFixed(0));
  for (let i = 0; i < paginations; i++) {
    goodsListPaginationData["page" + (i + 1)] = [];
    for (let k = 0; k < 20; k++) {
      if (goodsListData[i * 20 + k] == undefined) break;
      goodsListPaginationData["page" + (i + 1)].push(goodsListData[i * 20 + k]);
    }
  }

  return {
    goodsListData,
    goodsListPaginationData
  }
}