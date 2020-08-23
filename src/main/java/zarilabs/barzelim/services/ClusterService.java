package zarilabs.barzelim.services;

import zarilabs.barzelim.baseobjects.Cluster;

import java.util.List;

public interface ClusterService {
    List<Cluster> findAll();
}
