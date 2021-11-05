using System.Threading.Tasks;
using IceCreamLogistics.Domain;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    public interface IMixingBatchesRepository
    {
        Task Create(MixingBatchCreate batch);
    }
}