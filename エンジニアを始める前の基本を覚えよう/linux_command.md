


＊Linuxコマンド

  df => ファイルシステムのディスク容量の使用状況

    Filesystem / Size / Used / Avail / Capacity / iused / ifree / %iused / Mounted on
    デバイス名 / ディスク容量 / 使用ディスク容量 / 空きディスク容量 / ディスク容量の使用量の割合 /

    Filesystem => Linuxにおけるディスク名
    Mount => ハードディスクやフロッピーディスクなどのFiesystemのファイルをLinuxで読み書きしようとした時に必要になる行為

  df -h => dfを適切な単位で表示


  ls -al => ファイルやディレクトリの情報を表示する

    drwxr-xr-x  8 H  staff   272  1 16 23:18 ☓☓☓☓☓☓☓☓☓☓.rb

    d => ファイルタイプ={-:ファイル, d:ディレクトリ, l:シンボリックリンク}
    rwxr => 権限={r:読み込み可, w:書き込み可, x:実行可, -:権限なし}
    8 => 内部のディレクトリ数
    H => 所有者
    staff => グループ


  man => マニュアルを表示
    man -k [keyword] というオプションを付けるとkeywordを含むマニュアルを表示


  less [filename] => ファイルの内容をページ単位で閲覧可能
    less comapny_logs_controller.rb のように指定


  lv [filename] => lessの日本語バージョン


  cat -n [filename] => lv [filename] に行番号をつけて表示する


  top =>　コンピュータ内部で何が起こっているかの判別をする際に利用するコマンド


  touch [filename] => 空のファイルを作成する/ファイルの更新時刻を更新する


  tree -L 4 => 現在のディレクトリから4階層下までをtree表示する


  homebrew => mac os に対応したパッケージ管理ツール / インストールを簡単に行える / インストールしたものは基本的にビルドをするので、環境依存しにくい

  brew cask => homebrew の拡張版であり、早く、たくさんのパッケージを備えている

























