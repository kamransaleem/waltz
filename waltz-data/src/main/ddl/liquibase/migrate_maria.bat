C:/tools/liquibase-3.5.1-bin/liquibase.bat ^
--driver=org.mariadb.jdbc.Driver ^
--classpath=C:/Users/Kamran/.IntelliJIdea2016.1/config/jdbc-drivers/mariadb-java-client-1.4.6.jar ^
--changeLogFile=db.changelog-master.xml ^
--url="jdbc:mysql://localhost:3307/waltz" ^
--username=root ^
--password=password@123 ^
migrate
