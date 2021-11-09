using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Application
{
    public class InventoryService
    {
        private readonly IInventoryRepository _inventoryRepository;

        public Task InventoryCorrection(IEnumerable<MixingBatchCreateItem> members)
        {
            throw new NotImplementedException();
        }

        public Task InventoryStockUp(IEnumerable<MixingBatchCreateItem> members)
        {
            throw new NotImplementedException();

        }

        public Task DepleteInventory(IEnumerable<MixingBatchCreateItem> members)
        {
            throw new NotImplementedException();

        }
    }
}