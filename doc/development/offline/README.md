# offline configurations

# Overview

This page details the necessary steps to move this project along with all its dependencies from an open to a closed environment without Internet connectivity. To set up this environment, we will use a base Vagrant box provided by [geerlingguy/centos7](https://app.vagrantup.com/geerlingguy/boxes/centos7). 

# Initial Installation

## Vagrant

By default, doing a `vagrant up` will not isolate the guest from a network perspective. This allows for additional configurations. The provided `Vagrantfile` has a Shell Provisioner that updates and disconnects the guest machine by invoking a script [[1]](https://github.com/hashicorp/vagrant/issues/8601); likewise, the user can run this directly on the guest itself as root.  

To get the guest into a close-to-completely isolated environment, perform one of the following.

- Go into offline mode on immediately when `vagrant up` (must directly call the Shell Provisioner)

```shell script
vagrant up --provision-with offline
```

- Go into offline mode from within the guest

```shell script
sudo /bin/bash /vagrant/scripts/offline.sh
```

- Go into offline mode from the host with the guest already up in online mode

```shell script
vagrant provision --provision-with offline
```

## nodejs

> Node: v13.13.0, NPM: 6.14.4 

1. Download the [nodejs Linux binaries](https://nodejs.org/en/download/) into this directory.
2. Execute: `vagrant ssh`
3. Execute: `cd /vagrant`
4. Confirm that the downloaded file exists, i.e. node-v13.13.0-linux-x64.tar.xz
5. Execute: `/bin/bash /vagrant/scripts/install_node_binary.sh /vagrant/node-v13.13.0-linux-x64.tar.xz` [[3]](https://github.com/nodejs/help/wiki/Installation)
6. By default, the script will install to `/opt/nodejs`.

## yarn

> v1.22.4

The steps for a manual yarn install is available in their documentations [[4]](https://classic.yarnpkg.com/en/docs/install) with the latest being `v1.22.4`.

1. Download the [latest yarn](https://yarnpkg.com/latest.tar.gz) into this directory.
2. Execute: `vagrant ssh`
3. Execute: `cd /vagrant`
4. Confirm that the downloaded file exists, i.e. latest.tar.gz
5. Execute: `/bin/bash /vagrant/scripts/install_yarn_binary.sh /vagrant/latest.tar.gz` 
6. By default, the script will install to `/opt/yarn/yarn-[version]`

# Node Offline Install

> TODO

# Yarn Offline Install

> TODO

# Resources

1. https://github.com/hashicorp/vagrant/issues/8601

2. https://nodejs.org/en/download/

3. https://github.com/nodejs/help/wiki/Installation

4. https://classic.yarnpkg.com/en/docs/install

5. https://classic.yarnpkg.com/blog/2016/11/24/offline-mirror/

6. https://github.com/npm/npm/issues/1349

7. https://addyosmani.com/blog/using-npm-offline/
