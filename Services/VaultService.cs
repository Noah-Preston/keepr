using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultService
  {
    private readonly VaultsRepository _repo;
    public VaultService(VaultsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Vault> Get()
    {
      return _repo.Get();
    }
    internal IEnumerable<Vault> GetMyVaults(string UserId)
    {
      return _repo.GetMyVaults(UserId);
    }
    internal Vault Get(int Id)
    {
      Vault found = _repo.Get(Id);
      if (found == null)
      {
        throw new Exception("Not Authorized");
      }
      else
      {
        return found;
      }
    }
    internal Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }
    internal Vault Edit(Vault updatedVault)
    {
      Vault found = Get(updatedVault.Id);
      if (found.UserId != updatedVault.UserId)
      {
        throw new Exception("Not Authorized");
      }
      found.Name = updatedVault.Name;
      found.Description = updatedVault.Description != null ? updatedVault.Description : found.Description;
      return _repo.Edit(found);
    }
    internal Vault Delete(int id, string userId)
    {
      Vault found = Get(id);
      if (found.UserId != userId)
      {
        throw new Exception("Not Authorized");
      }
      if (_repo.Delete(id))
      {
        return found;
      }
      throw new Exception("Not Authorized");
    }
  }
}