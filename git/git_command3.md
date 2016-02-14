**masterの状態を最新にして、pull requestを出してマージされるまでの流れ**

```
git pull origin master
git checkout -b development
<file changed>
git add <file name>
<file changed>
git add <file name>
git commit -m "message"
git push origin development
<Pull Request出す>
git checkout master
git merge development
git push origin master
```
という流れ
